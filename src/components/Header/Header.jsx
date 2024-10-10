import PropTypes from 'prop-types'
/**
 * Returns header that displays a <h1> tag
 * @param {string} props.text - h1 text
 * @param {JSX.element} The Jsx for the header component
 */
const Header = ({text}) => {
    return (
        <div>{text}</div>
    )
    }

    Header.propTypes = {
    text: PropTypes.string.isRequired,
    }

export default Header