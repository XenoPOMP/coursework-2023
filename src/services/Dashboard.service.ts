import axios, { Axios, AxiosResponse } from 'axios';
import useEnv from '@hooks/useEnv';

const { SSL, DOMAIN, APP_PORT } = useEnv();

const DashboardService = {
  async execQuery(qry: string, uuid: string | null): Promise<AxiosResponse> {
    return await axios.get(
      `${SSL?.HTTP}://${DOMAIN}:${APP_PORT}/${qry}?uuid=${uuid}`,
    );
  },
};

export default DashboardService;
