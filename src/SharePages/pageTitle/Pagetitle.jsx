const Pagetitle = ({ title, page }) => {
    return (
        <div>
            <h4 className="text-2xl font-semibold mb-2">{title}</h4>
            <p>Home / {page}</p>
        </div>
    )
}

export default Pagetitle