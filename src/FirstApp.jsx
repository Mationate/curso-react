import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle, name}) => {
  
    return (
    <>
        <h1 data-testid="test-title">{title}</h1>
        {/* <code>{JSON.stringify(newMessage)}!! </code> */}
        <p>{subtitle}</p>
        <p>{subtitle}</p>
        <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    //subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps ={
    name: 'Mati',
    subtitle: 'No hay subtitulo',
    title: 'No hay titulo',
}