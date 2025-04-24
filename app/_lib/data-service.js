import { supabase } from './supabase';

export async function getCar(id) {
  const { data, error } = await supabase
    .from('cars')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export const getCars = async function (
  page = 1,
  pageSize = 6,
  searchTerm = '',
  filters = {}
) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  try {
    let query = supabase
      .from('cars')
      .select('*', { count: 'exact' })
      .range(from, to);

    if (searchTerm) {
      query = query.ilike('name', `%${searchTerm}%`);
    }

    if (filters.minPrice) {
      query = query.gte('price', filters.minPrice);
    }
    if (filters.maxPrice) {
      query = query.lte('price', filters.maxPrice);
    }

    if (filters.minYear) {
      query = query.gte('madeYear', filters.minYear);
    }
    if (filters.maxYear) {
      query = query.lte('madeYear', filters.maxYear);
    }

    if (filters.minKm) {
      query = query.gte('kmNumber', filters.minKm);
    }
    if (filters.maxKm) {
      query = query.lte('kmNumber', filters.maxKm);
    }

    const { data, error, count } = await query;

    if (error) {
      console.error('Supabase Error:', error);
      return { cars: [], totalCount: 0 };
    }

    return {
      cars: data || [],
      totalCount: count || 0,
    };
  } catch (err) {
    console.error('Unexpected Error:', err);
    return { cars: [], totalCount: 0 };
  }
};
