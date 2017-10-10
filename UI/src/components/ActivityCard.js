import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle';
import CardText from 'react-toolbox/lib/card/CardText';
import ImageGallery from 'react-image-gallery';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import "react-image-gallery/styles/css/image-gallery.css";
import icons from '../icons/tagIcons';

class ActivityCard extends Component {


    getImages() {

        var images=[];

        for(var link in this.props.bucket.activeCard.links) {
            var url = this.props.bucket.activeCard.links[link];

            if (url.match(/\.(jpeg|jpg|gif|png|svg)$/) !== null) {
               images.push({original:url,thumbnail:url});
            }
        }

        if(images.length === 0)
            images.push({original:"http://blog.enableb.com/static/dist/images/placeholder/no_image.svg"});

        return images;
    }

    render() {
        return (
            <div>
                <Card style={{width: '400px'}}>
                    <CardTitle
                        avatar={this.getAvatar()}
                        title={this.props.bucket.activeCard.name}
                        subtitle={this.props.bucket.activeCard.address + " " + this.props.bucket.activeCard.state}

                    />
                    <ImageGallery items={this.getImages()} showFullscreenButton={false} showPlayButton={false}/>
                    <CardTitle
                        title="Description"
                    />
                    <CardText>
                        {this.props.bucket.activeCard.description}
                    </CardText>
                </Card>
            </div>
        );
    }

    getTagImage() {
        return <Avatar image={icons[this.props.bucket.activeCard.tags[0]]} cover />;
    }

    getAvatar(){

        var images = this.getImages();

        if(images[0].original === "http://blog.enableb.com/static/dist/images/placeholder/no_image.svg")
            return this.getTagImage();

        console.log(images);

        var image = images[0].original;
        return <Avatar image={image} cover />;

    }
}

const mapStateToProps = (state) => {
    return {
        bucket: state.bucket
    };
};

export default connect(mapStateToProps)(ActivityCard);
