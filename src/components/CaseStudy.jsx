import './style/casestudy.css'

export default function CaseStudy(){
    return(
        <>
        <div className="study">
            <div className="wel-heading">
                 <h3>CASE STUDIES</h3>
                 <h1>Our Success Stories</h1>
            </div>
            <div className="study-card">
                <div className="card">
                    <img src="src\components\image\medco.png" alt="medco" height={"200px"}/>
                    <h2>
                        <a href="#">Full Cycle Implementation SAP S4/HANA</a>
                    </h2>
                    <h4>Implementing SCM in MM Module to centralize all the mined goods and what to transform, cross functioning with SD Module.</h4>
                    <h4>Warehouse – functioning as storage management warehouse system for raw material, semi-finished & finished goods also tracking the usage for fuel, spareparts and enabling function to request to order, cross functioning with multiple modul</h4>
                </div>
                <div className="card">
                    <img src="src\components\image\haldin.png" alt="haldin"  height={"200px"}/>
                    <h2>
                        <a href="#">Project H2H AP&AR Program SAP</a>
                    </h2>
                    <h4>Originally established as an importer of Indonesian Vanilla to customers in North America, Haldin expanded its offering to meet their increasingly diverse demands. At the same time, Haldin developed its expertise in sourcing the best quality raw materials and turning those natural materials into the essential building blocks around which customers built their products.</h4>
                </div>
                <div className="card">
                    <img src="src\components\image\lazada.png" alt="haldin" height={"200px"}/>
                    <h2>
                        <a href="#">SAP HW Migration Project</a>
                    </h2>
                    <h4>Lazada group requires to migrate SAP and non-SAP services (As per scope) from Hongkong Datacenter to Singapore DatacenterAs Applications are currently hosted on physical servers in a data center in Hong Kong, where hardware resource utilization is reaching its limit.Migrated system copy of below services from old datacenter to new datacenter.</h4>
                </div>
            </div>
        </div>
        

        </>
    )
}