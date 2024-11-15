import api, { handleApiResponse, handleApiError}  from '@/api';
import { ManualListItem } from './ManualsPage.types';

export const getManuals = (): Promise<ManualListItem[]> =>
    api.get<ManualListItem[]>('/api/v1/manuals/list')
        .then(handleApiResponse)
        .catch(handleApiError);