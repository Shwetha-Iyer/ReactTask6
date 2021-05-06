export default function Row3cards(props){
    return <>
    <h4 className="small font-weight-bold">{props.datas.title}
    <span className="float-right">{props.datas.label}</span></h4>
        <div className="progress mb-4">
            <div className={props.datas.styles} role="progressbar" style={{width:`${props.datas.percent}%`}} aria-valuenow={props.datas.percent} aria-valuemin="0" aria-valuemax="100">
            </div>
        </div>
    </>
}