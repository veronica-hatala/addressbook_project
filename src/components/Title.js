const Title = ({text}) => {
    return(
        <header className="titleText">
            <h2>
                {text}
            </h2>
        </header>
    )
}

Title.defaultProps ={
    title: "Address Book",
}

export default Title