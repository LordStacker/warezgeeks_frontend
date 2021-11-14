import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Pic1 from './components/pics/female1.png';
import Pic2 from './components/pics/male1.png';
import Pic3 from './components/pics/female2.png';
import Pic4 from './components/pics/male2.png';
import Pic5 from './components/pics/female3.png';
import Pic6 from './components/pics/male3.png';

class ProfileAvatarChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            imagesArray: [props.pic1, props.pic2, props.pic3, props.pic4, props.pic5, props.pic6]
        };
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        const imageMapper = this.state.imagesArray.map((image, index) => {
            return (
                <img src={image}
                    onClick={() => this.props.handleImageChange(image)}
                    height="80px"
                />
            )
        })
        return (
            <div className="ProfileAvatarChanger">
                <Button type='primary' onClick={this.showModal}>
                    Escoge tu avatar
                </Button>
                <Modal
                    title="Selecciona tu avatar"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {imageMapper}
                </Modal>{" "}
            </div>
        );
    }
}
export default ProfileAvatarChanger;
