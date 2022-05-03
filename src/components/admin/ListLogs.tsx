import React, { useEffect, useState } from 'react';

import { ApiService } from 'services/api.service';
import { useClockFromDate } from 'hooks';
import { routes } from 'resources/routes';
import toast from 'utils/toastr';

interface TimeCellProps {
  date: Date | string;
}

const TimeCell: Component<TimeCellProps> = ({ date }) => {
  const time = useClockFromDate(new Date(date));

  return <>{time}</>;
};

const fetchLogs = (limit: number, start: number) =>
  ApiService.get<any, { logs: Logs }>(routes.logs.api.list, { params: { limit, start } });

const ListLogs: Component = () => {
  const [logs, setLogs] = useState<Logs>([]);

  useEffect(() => {
    fetchLogs(20, 0)
      .then((data) => setLogs(data.logs))
      .catch((error) => toast(error.message, 'error'));
  }, []);

  return (
    <table className='custom-table'>
      <thead>
      <tr className='bg-gray-800'>
        <th />
        <th>Method</th>
        <th>Route</th>
        <th>Ip</th>
        <th>Utilisateur</th>
        <th>Il y a</th>
      </tr>
      </thead>
      <tbody>
      {logs.map((log) => (
        <tr key={log.id}>
          <td>{log.id}</td>
          <td>{log.method}</td>
          <td>{log.path}</td>
          <td>{log.ip}</td>
          <td>{log.user?.id}</td>
          <td>
            <TimeCell date={log.createAt} />
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default ListLogs;
