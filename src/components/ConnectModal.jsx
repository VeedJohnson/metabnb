import { useModalContext } from "../contexts/ModalContext/ModalContext";
import mMask from "../assets/images/mMask.png";
import walletConnect from "../assets/images/walletConnect.png";
import {ReactComponent as ArrowRight} from "../assets/icons/ArrowRight.svg";
import "./styles/connectmodal.css";

const ConnectModal = () => {
    const {isVisible, toggleVisibility} = useModalContext();

    return (
        <>
            {
                isVisible &&
                <div className="overlay">
                    <div className="modal">
                        <div className="modal_header">
                            <h2>Connect Wallet</h2>
                            <p onClick={toggleVisibility}>&#10005;</p>
                        </div>
                        <div className="modal_content">
                            <p>Choose your preferred wallet:</p>
                            <button>
                                <div className="wallet_name">
                                    <img src={mMask} alt="Metamask" />
                                    <p>Metamask</p>
                                </div>
                                <ArrowRight />
                            </button>
                            <button>
                                <div className="wallet_name">
                                    <img src={walletConnect} alt="WalletConnect" />
                                    <p>WalletConnect</p>
                                </div>
                                <ArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ConnectModal;