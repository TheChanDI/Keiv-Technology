import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardSection, Input, Header} from './common';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TabShow from './Tabs/TabShow';
import TabName from './Tabs/TabName';
import TabName1 from './Tabs/TabName1';



class Content extends Component {

    state= {
        screen: 'This is for Job screen. You will get the job you wanted!!!'
    }

    
    TabContent1 = () => {
        this.setState({
            screen: 'This is for Job screen. You will get the job you wanted!!!'
        })
    }

    TabContent2 = () => {
        this.setState({
            screen:'It is for Internship. It is available for all the interested candidate. Apply now'
        })
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Header /> 
                </CardSection>
               
               <CardSection>
                <Image 
                    source={require('../assets/keivtech.png')}
                    style={styles.imgStyle}
                />
                </CardSection>
                 
                <CardSection>
                   <Input
                    placeholderName="Search for Oppourtunities..."
                    />

                    
                    <TouchableOpacity>
                        <Icon name="search" size={30}/>
                    </TouchableOpacity>
                   
                </CardSection>
                
                <CardSection>
                    <TabName onPress={this.TabContent2}/>
                    <TabName1 onPress={this.TabContent1} />
                </CardSection>

                <CardSection>
                    <TabShow text={this.state.screen} />
                </CardSection>

            </Card>
        );
    }
}
const styles = StyleSheet.create({
    imgStyle: {
        height: 100,
        flex: 1
    }
})
export default Content;
           

