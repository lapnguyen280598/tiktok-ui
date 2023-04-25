import className from "classnames/bind"
import styles from "./Header.module.scss"
import image from "~/accest/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark, } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons"


const cx = className.bind(styles)

console.log(image.logo)

function Header() {
    return <header className={cx("wrapper")}>
        <div className={cx("inner")}>
            <div className={cx("logo")}>
                <img src={image.logo} alt="logo" />
            </div>
            <div className={cx("mid")}>
                <input placeholder="Tìm kiếm" />
                <button className={cx("close")}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
                <button className={cx("search")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={cx("actions")}>
                a
            </div>
        </div>
    </header>

}

export default Header;