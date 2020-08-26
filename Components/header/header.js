const Header = () => {
let firstDate = 'martes, 31 de marzo de 2020';
let endDate = 'miércoles, 1 de abril de 2020';
    return (
        <header>
            <div>
                <h1>
                    Hoteles
                </h1>
                <h2>Desde el {firstDate} hasta el {endDate}{' '}</h2>
            </div>
        </header>
    );
};

export default Header;

