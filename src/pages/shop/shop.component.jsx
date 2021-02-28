import React from 'react';
import Shop_Data from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: Shop_Data
    }
  }

  render() {
    const {collections} = this.state;
    return <div>
      {
        collections.map(({id, ...otherProps}) => (
          <PreviewCollection key={id} {...otherProps}/>
        ))
      }
    </div>
  }
}

export default ShopPage;
