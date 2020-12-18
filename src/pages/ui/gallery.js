import {Component} from "react";
import {Card, Row, Col, Modal} from "antd";


class Gallery extends Component {

  state = {
    visible: false,
    currentImg: ''
  }

  openGallery = (imgSrc) => {
    this.setState({
      visible: true,
      currentImg: imgSrc
    });
  }

  cancelGallery = () => {
    this.setState({visible: false})
  }

  render() {
    const cards = new Array(25).fill(null)
      .map((v, i) => `${i + 1}.png`)
      .map(item =>
        <Card style={{marginBottom: 10}}
              hoverable
              cover={<img onClick={() =>
                this.openGallery(`/gallery/${item}`)}
                          alt='' src={`/gallery/${item}`}/>
              }
        >
          <Card.Meta title="React Admin" description="IMooc"/>
        </Card>
      )
    const colNum = 4;
    const cardGroups = new Array(colNum);
    cards.forEach((card, i) => {
      const cardGroup = cardGroups[i % colNum] ?? new Array(0);
      return cardGroup.push(card) && (cardGroups[i % colNum] = cardGroup)
    });
    const cols = cardGroups.map(cgs => <Col span={24 / colNum}>{cgs}</Col>);

    return (
      <div>
        <Row gutter={8}>{cols}</Row>
        <Modal visible={this.state.visible}
               footer={null} title={null}
               onCancel={this.cancelGallery}
               closable={false}
        >
          <img onClick={this.cancelGallery}
               src={this.state.currentImg} alt=""
               style={{width: '100%', height: '100%'}}/>
        </Modal>
      </div>
    );
  }
}

export default Gallery;