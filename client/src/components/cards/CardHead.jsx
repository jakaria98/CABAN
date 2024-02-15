import { cardStyle } from './cardStyle';

const CardHead = (props) => {
    return (
        <div className="row mt-5">
            <div className="col">
                <div
                    className="card m-3"
                    style={{
                        ...cardStyle,
                        height: props.height,
                        backgroundColor: props.bgColor || '#faa400',
                        border: props.border,
                    }}
                >
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default CardHead;
