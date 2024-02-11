import { cardStyle } from './cardStyle';

const CardHead = (props) => {
    return (
        <div className="row mt-5" style={{ paddingLeft: '3px', paddingRight: '3px' }}>
            <div className="col">
                <div
                    className="card m-3"
                    style={{ ...cardStyle, height: props.height, backgroundColor: props.bgColor , border: props.border}}
                >
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default CardHead;
