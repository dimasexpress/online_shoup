// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
    
      {dtUsr : [
      { nama: 'jamet', alamat: 'srono' },
      { nama: 'Bagio', alamat: 'payaman' },
      { nama: 'Sulas', alamat: 'd' },
      { nama: 'Petrik', alamat: 's' }]
    }
    )
}
