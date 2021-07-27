import useSWR from 'swr'
async function fetcher(url){
    const res = await fetch(url);
    return res.json();
}
export const fet = () =>{
    const url = 'http://localhost:3000/api/datauser';
    const {data, error}= useSWR(url, fetcher);
    return{data, error}
}

export const barang = () =>{
    const url = 'http://localhost:3000/api/barang/databarang';
    const {data, error}= useSWR(url, fetcher);
    return{data, error}
}

export const nota = () =>{
    const url = 'http://localhost:3000/api/nota/datanota';
    const {data, error}= useSWR(url, fetcher);
    return{data, error}
}