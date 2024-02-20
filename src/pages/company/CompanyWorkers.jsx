import Loader from '../../components/elements/Loader';
import WorkersList from '../../components/lists/WorkersList';
import { useGetUsersQuery } from '../../store/query/usersQuery';

const CompanyWorkers = () => {
  const { data, isLoading } = useGetUsersQuery({
    token: localStorage.getItem('accessToken'),
  })

  return (
    isLoading ? <Loader/> : <WorkersList profile={data}/>
  )
}

export default CompanyWorkers