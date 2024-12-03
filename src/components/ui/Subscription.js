var times = "https://s3-alpha-sig.figma.com/img/73de/70f1/d17c1303802d1491aff7acafa795b6f0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z4a7qWfofpbmUXJCKhN-UG-EAAohNYIGemU4Xovv-3Pv3sx9IUbZfPDiHZTzu3f33dFOZt7JeCVvJdoVlJkIGuFcHw8BGpmLOue32j9wxhciioQJLY0m35rm9ugcpZXBCJe-g2WMw4Z3wtoK~GMvKDxOsRmOJ8Sxy~N~TpXFQ-l5b2eOx49hi4OW7k-LCLhaeJJW66BVvWyDkLdvFMi-mnyZWo6P9w-uqaWu9mp7Xj4YsVdGm91Op9q5YB5~TtwxtJwgN4oCUJNZXWFu9HuuMULTns8njRbGXEZOOLWlP7x-0rd8wj73u0T8cntORl8kMRgYhUZCeqQ1zxUdRISPdw__"
var wsj = "https://s3-alpha-sig.figma.com/img/c47f/a7ef/7a1d933f6b06c3300702a04f76f66344?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLV-y7Z8cNyIGelh~B2snHHX7Xf6b1IGp-dHqwcuC7Cr7CA92J9lEG5semwr~fliEXq6Ekq6~OackpwR3NJGgWWLAuUJaXXOn1YEKGiCywX-vs8YbfjtN0JwIzGu9ybOKZzhIZ4TOb4FF3OaOWh5TqmoYkF307XLOHU0lfkEizXE~b8NUB9fwvFXWK49H4124MkV8Fon5c7v-gnJGWGRmDdf2O74tUSxaS6MpQwzu5Nf1KgHa8LKuQ2gcbu31z7Yv~cES61slwCfwxyt1O-uQXa069sa-zpuss2uUdkW9gmWgpi5S2SraBa4K7NgGkyREmJDtCaJko7~E4DPYuo7mA__"
var def = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
export default function Subscription() {
    return(
      <div className="h-[319px] flex bg-gradient-to-r from-[#FFD67A] to-[#F9B315]">
            <div className="flex-1 flex">
                <div className="place-content-center  m-12">
                <img src={times} className="h-[46px] w-[36px]"/>
                <h1 className="text-[23px]">New York Times</h1>
                <p className="p-1">{def}</p>
                <input
                  type="text"
                  placeholder="Register"
                  className="border-2 border-black p-2"
                />
              </div>
            </div>
            <div className="flex-1 flex">
                <div className="place-content-center m-12">
                <img src={wsj} className="h-[36px] m-1 w-[62px]"/>
                <h1 className="text-[23px]">Wall Street Journal</h1>
                <p className="p-1">{def}</p>
                <input
                  type="text"
                  placeholder="Register"
                  className="border-2 border-black p-2"

                />
              </div>
            </div>
      </div> 
    );
}