import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames/bind"
import style from "./AccountsItem.module.scss"

const cx = classNames.bind(style)

function AccountsItem() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")}
                src=" https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c19974fc6fe2a76a9b3ea0e71a22b236~c5_100x100.jpeg?x-expires=1683730800&x-signature=VAIOzk7Ri3AUvtlvuMZxsE6VEY4%3D" alt="Hoaa" ></img>
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </p>
                <span className={cx("username")}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountsItem;