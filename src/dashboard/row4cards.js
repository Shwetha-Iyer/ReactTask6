export default function Row4cards(props){
    return <>
    <div className="col-lg-6 mb-4">
        <div className={props.items.stylees}>
            <div className="card-body">
                {props.items.title}
                <div className="text-white-50 small">{props.items.text}</div>
            </div>
        </div>
    </div>
    </>
}