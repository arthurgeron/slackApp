import { useUserListQuery } from '@queries';
import { selectSetShouldOpen, useToastStore } from '@stores/useToastStore';
import { useState, startTransition, useMemo,  SyntheticEvent, useEffect, ChangeEvent } from 'react';
import * as S from './styles';

export function UserList() {

  const [filterData, setFilterData] = useState('');
  const [realtime, setRealtime] = useState(true);
  const setToastData = useToastStore(selectSetShouldOpen);
  const userListQuery = useUserListQuery(realtime);


  function handleChange(event?: SyntheticEvent) {
    if (event) {
      startTransition(() => {
        setFilterData((event.target as HTMLInputElement).value.replace('/', ''));
      });
    }
  }

  useEffect(() => {
    if (userListQuery.isSuccess && !!userListQuery.data) {
      setToastData(true, {title: 'Update', description: 'New data received!'});
    }
  }, [userListQuery.isSuccess, userListQuery.data, setToastData]);


  const parsedData = useMemo(() => userListQuery.data?.map(userData => ({data: userData, stringified: Object.keys(userData).map(key => { 
    if (Object.prototype.hasOwnProperty.call(userData, key)) {
      return (typeof userData[key] === 'number' ? String(!!userData[key]) : String(userData[key])).toLowerCase() ?? '';
    }
    return '';
  }).join('/')})) ?? [], [userListQuery.data]);

  const filteredData = useMemo(() => !filterData ? parsedData : parsedData.filter((user) => user.stringified.includes(filterData)), [filterData, parsedData]);

  function onCheckedChange(checked: boolean) {
    setRealtime(checked);
  }


  return <S.Container>
    <S.Header>
      <S.HeaderLabels>
        <S.Title>Slack Users</S.Title>
        <S.FilterInput disabled={userListQuery.isError} placeholder="Filter users' data..." onChange={handleChange} />
      </S.HeaderLabels>
      <S.SwitchContainer>
        <S.SwitchLabel >
          Realtime
        </S.SwitchLabel>
        <S.Switch defaultChecked checked={!userListQuery.isError && realtime} onCheckedChange={onCheckedChange} disabled={userListQuery.isError}>
          <S.SwitchThumb />
        </S.Switch>
      </S.SwitchContainer>
    </S.Header>
    <S.StyledScrollArea>
    <S.StyledViewport>
      <S.Box>
        {userListQuery.isSuccess && filteredData.map(({data}) => (
          <S.ListItemContainer key={data.id}>
            {!!data.IMAGE_512 && <S.Avatar src={data.IMAGE_512} width="42" height="42" />}
            <S.VerticalLabelContainer>
              <S.UserId>ID: {data.id}</S.UserId>
              <S.UserName>@{data.name}</S.UserName>
            </S.VerticalLabelContainer>
            <S.VerticalLabelContainer>
              <S.TimeZone>{data.TZ}</S.TimeZone>
              <S.RealName>{data.real_name}</S.RealName>
            </S.VerticalLabelContainer>
              <S.StatusData>Status: {data.STATUS_EMOJI} {data.STATUS_TEXT || 'N/A'}</S.StatusData>
              <S.DeletedLabel>Deleted:</S.DeletedLabel>
              <S.DeletedValue>{String(!!data.deleted)}</S.DeletedValue>
          </S.ListItemContainer>
          
        ))}
        {userListQuery.isLoading && <S.SoloLabel>Fetching user data</S.SoloLabel>}
        {userListQuery.isError && <S.SoloLabel>Could not fetch user data</S.SoloLabel>}
        {!!filterData && !filteredData.length &&  <S.SoloLabel> No results found for that filter :( </S.SoloLabel>}
      </S.Box>
    </S.StyledViewport>
    <S.StyledScrollbar orientation="vertical">
      <S.StyledThumb />
    </S.StyledScrollbar>
    <S.StyledCorner />
  </S.StyledScrollArea>
  </S.Container>
}