import { NextResponse } from 'next/server';

import { MOCK_RESTAURANTS as restaurants } from '../data'

export async function GET() {
  return NextResponse.json(restaurants)
}
