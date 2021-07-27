//@ts-check
// import useSWR from 'swr'
// async function fetcher(url){
//     const res = await fetch(url);
//     return res.json();
// }
import DtU from '../../member/user/DataUser'
export default function dtuser(){
    // const url = 'http://localhost:3000/api/hello';
    // const {data, error}= useSWR(url, fetcher);

    return(
       <DtU/>
    )
}