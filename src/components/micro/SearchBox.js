import { useState } from "react";

function SearchBox({ callback, ...rest }) {
    const [value, setSearch] = useState("");

    const searchHandler = (v) => {
        setSearch(v);

        if (callback) {
            callback(v);
        }
    }

    return (
        <div className="flex aic graye p25 pl50 br6 ofh pr">
            <input
                className="trans cgray5 bor0 p25 w100 f1"
                placeholder="Search..."
                onChange={(e) => searchHandler(e.target.value)}
                value={value}
                {...rest}
            />
            <div className="cp search-icon pr50 pl25 f08 pr ic30">
                <span show={value.length === 0 ? "1" : "0"} className="ix-search ic tr4 ic30 pa t0 r0" />
                <span show={value.length === 0 ? "0" : "1"} className="ix-x ic tr4 ic30 pa t0 r0" onClick={() => searchHandler("")} />
            </div>

        </div>
    );
}

export default SearchBox;
