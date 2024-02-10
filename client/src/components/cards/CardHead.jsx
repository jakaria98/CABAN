import { cardStyle } from './cardStyle';

const CardHead = (props) => {
    return (
        <div className="row mt-5">
            <div className="col">
                <div className="card bg-info-subtle m-3" style={{...cardStyle, height: props.height}}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default CardHead;
