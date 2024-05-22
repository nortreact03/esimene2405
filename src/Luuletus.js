function Luuletus(props) {
    return (
        <div className="luuletus">
            <p>
                Kes hommikuti külas käib, see asjatult ei longi
            </p>
            <p>
                param-param-param-paraa
            </p>
            <p>
                sest selleks hommik ongi
            </p>
            <img className='img-responsive'  src={props.pilt} alt='suusataja' />
        </div>
    )
}

export default Luuletus