export default function Row1cards(props){

    return <>
    <div className="col-xl-3 col-md-6 mb-4">
        <div className={props.data.border}>
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className={props.data.text}>
                            {props.data.title} 
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                            {props.data.value}
                        </div>
                    </div>
                    <div className="col-auto">
                        <i className={props.data.icon}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}