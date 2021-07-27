import {barang} from '../../lib/swr-fetcer'


import Iss from './propdata/propdata'
export default function tabel (){
  const {data, error}= barang();
    if(error){
        return <div>
            Error loading
        </div>
    }if(!data){
        return <div>
            loading
        </div>
    }
    const dataf = data;
   /* const datgam =   [{urlgam : 'https://p.ipricegroup.com/uploaded_cbab94b165783fbf63bc824ed8a3fc43.jpg?position=3' ,
                    nama :'Asus Tuf FX505DY-R5698T',
                    ktg : "AMD Ryzen 5 Ram Ram 8Gb DDR4 Vga Vega 5 Led 15,6 "},

                    {urlgam : 'https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/2/13/ab346171-7c53-4391-a12e-abb620726be6.png.webp?ect=3g',
                     nama :'Acer Aspire 5 A514-53' ,
                    ktg : 'i3-1005G1 DDR4 4GB SSD 512GB 14" W10 OHS'},

                    {urlgam : 'https://images.tokopedia.net/img/cache/100-square/VqbcmM/2020/12/21/bd5721b5-90a1-41be-8ec5-54d8ecfe5c87.png.webp?ect=3g',
                   nama :'ACER ASPIRE 5 A515-44' , 
                    ktg : 'AMD RYZEN 5-4500U 8GB 512GB 15.6" OHS W10'},
                    
                    {urlgam : 'https://images.tokopedia.net/img/cache/100-square/product-1/2020/8/6/16234150/16234150_8f4e1452-351c-4bfb-87c2-b983fcd684f0_800_800.webp?ect=3g',
                    nama :'tHP ENVY x360 13 - ay0006AU' , 
                     ktg : 'AMD Ryzen7 4700U - 16GB -512GB SSD - W10'},
                     {urlgam : 'https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/5/4/cb24f215-ed42-486d-84e2-01c5ac2c4e91.png.webp?ect=3g',
                     nama :'Lenovo ThinkPad E14 Gen 2' , 
                      ktg : 'Core i5-1135G7 8 Gb 512 SSD Iris Xe W10 Pro - Backlit KB'},
                      {urlgam : 'https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/4/12/7f4e23b3-a3a0-4a78-8947-83aa63326d75.jpg.webp?ect=3g',
                      nama :'LENOVO IDEAPAD SLIM 5' , 
                       ktg : 'AMD RYZEN 7-4800U 8GB 512GB 15,6" FHD W10'},
                       {urlgam : 'https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/2/17/1dda150d-bad4-427d-9eee-acb9dd106c93.jpg.webp?ect=3g',
                       nama :'tLenovo Ideapad Slim 5' , 
                        ktg : 'AMD RYZEN 5 4500 8GB 512ssd BACKLITE W10+OFFICE - Abu-abu'},
                        {urlgam : 'https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/2/11/f0dbe0f6-8ed2-41aa-bd22-fa8355aa64e2.jpg.webp?ect=3g',
                        nama :'ACER ASPIRE 5 Slim A514-53' , 
                         ktg : 'i3-1005G1 512 SSD 8GB/4GB Intel UHD W10 OHS - 4GB512SSD'},
                         {urlgam : 'https://images.tokopedia.net/img/cache/100-square/VqbcmM/2020/11/30/b8603d81-68c4-479e-a563-edee343b5ec5.jpg.webp?ect=4g',
                         nama :'LAPTOP ASUS VIVOBOOK A416JA' , 
                          ktg : 'I3-1005G1 4GB 512GB 14" W10 KB BACKLIT OHS - 14" FHD IPS'},
                          {urlgam : 'https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/1/15/0914a47f-ad45-4dcd-89ba-a4466f987e19.jpg.webp?ect=3g',
                          nama :'ASUS VIVOBOOK ULTRA K413EA ' , 
                           ktg : 'i5-1135G7 8GB 512GB iRIS Xe 14" FHD OHS W10'},
                           {urlgam : 'https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/4/15/2a6d1bf7-bf23-406d-8fe1-bb309dda9ffd.jpg.webp?ect=4g',
                           nama :'ACER NITRO AN515-45 RYZEN 5 ' , 
                            ktg : '5600H 8GB 512GB GTX1650 15.6" IPS W10 OHS'},
                            {urlgam : 'https://images.tokopedia.net/img/cache/100-square/VqbcmM/2020/12/20/d6003c3c-a4dd-4d40-b2fc-23cc16530ac0.png.webp?ect=4g',
                            nama :'ASUS TUF Gaming A15 FX506LI' , 
                             ktg : 'Intel Core i5-10300H GTX1650Ti-4GB Black'}] */
    return(
      
<div className="container">


  <div className="row col-10">
  {dataf.map((card,index) =>
  
  <div className="col-3 lg-3 py-1" >
   <br></br><br></br>
    <Iss
    
    foto={card.foto} 
    
    nama_laptop={card.nama_laptop}
    
    spek_laptop={card.spek_laptop}
    harga={card.harga}    
    ></Iss>
        </div>)
  }
  </div>
  {/* {data.map((card)=>
      
          
              <img src={card.foto}
             />
        
      
  )
  } */}
  </div>


    )
}
