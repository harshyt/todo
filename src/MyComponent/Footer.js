import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "100vh",
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light text-center p-4" style={footerStyle}>
            Copyright &copy; My todo list
        </footer>
    )
}
