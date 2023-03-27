// @ts-check
import { readFileSync } from 'node:fs'
import pc from 'picocolors'

const packageJson = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url)).toString('utf-8')
)

const trueEnv = ['true', '1', 'yes']
const isCI = trueEnv.includes(process.env?.CI ?? 'false')

const NEXT_IGNORE_TYPE_CHECK = trueEnv.includes(process.env?.NEXT_IGNORE_TYPE_CHECK ?? 'false')
const NEXT_IGNORE_ESLINT = trueEnv.includes(process.env?.NEXT_IGNORE_ESLINT ?? 'false')
const SENTRY_DEBUG = trueEnv.includes(process.env?.SENTRY_DEBUG ?? 'false')
const SENTRY_TRACING = trueEnv.includes(process.env?.SENTRY_TRACING ?? 'false')

/**
 * A way to allow CI optimization when the build done there is not used
 * to deliver an image or deploy the files.
 * @link https://nextjs.org/docs/advanced-features/source-maps
 */
const disableSourceMaps = false

if (disableSourceMaps) {
  console.log(
    `${pc.green(
      'notice'
    )}- Sourcemaps generation have been disabled through NEXT_DISABLE_SOURCEMAPS`
  )
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: !disableSourceMaps,
  optimizeFonts: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },

  // @link https://beta.nextjs.org/docs/api-reference/next.config.js#transpilepackages
  transpilePackages: ['@wayofdev/ui'],

  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: (isCI ? 3600 : 25) * 1000,
  },

  // @link https://nextjs.org/docs/advanced-features/compiler#minification
  // Sometimes buggy so enable/disable when debugging.
  swcMinify: true,

  compiler: {
    // emotion: true,
  },

  // Standalone build
  // @link https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files-experimental
  output: 'standalone',

  // Optional build-time configuration options
  sentry: {
    hideSourceMaps: true,
  },

  typescript: {
    ignoreBuildErrors: NEXT_IGNORE_TYPE_CHECK,
  },

  eslint: {
    ignoreDuringBuilds: NEXT_IGNORE_ESLINT,
    // dirs: [`${__dirname}/src`],
  },

  webpack: (config, { webpack, isServer }) => {
    if (!isServer) {
      // Fixes npm packages that depend on `fs` module
      // @link https://github.com/vercel/next.js/issues/36514#issuecomment-1112074589
      config.resolve.fallback = { ...config.resolve.fallback, fs: false }
    }

    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/tree-shaking/
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: SENTRY_DEBUG,
        __SENTRY_TRACING__: SENTRY_TRACING,
      })
    )

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: [
        {
          loader: '@svgr/webpack',
          // https://react-svgr.com/docs/webpack/#passing-options
          options: {
            svgo: true,
            // @link https://github.com/svg/svgo#configuration
            svgoConfig: {
              multipass: false,
              datauri: 'base64',
              js2svg: {
                indent: 2,
                pretty: false,
              },
            },
          },
        },
      ],
    })

    return config
  },
  env: {
    APP_NAME: process.env.APP_NAME ?? 'APP_NAME-ENV-not-found',
    APP_VERSION: packageJson.version ?? 'not-in-package.json',
    BUILD_TIME: new Date().toISOString(),
  },
}

let config = nextConfig

const { sentry, ...rest } = config
config = rest

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
export default config
