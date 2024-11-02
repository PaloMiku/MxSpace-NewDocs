import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// 设置永久缓存
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source);