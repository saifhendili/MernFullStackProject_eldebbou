import React, { Fragment, useEffect,useRef,useState } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ChatBot from 'react-simple-chatbot';
import Message from './Sections/Message';
import { List, Icon, Avatar } from 'antd';
import Card from "./Sections/Card";
import { saveMessage } from '../../../actions/message_actions';
import ScrollToBottom from 'react-scroll-to-bottom';

function Chatbot() {
    const [state, setbut] = useState(false);

        // this.messagesEnd.scrollIntoView({ behavior: "smooth" });
        const scrollRef = useRef();
        useEffect(() => {
            if (scrollRef && scrollRef.current /* + other conditions */) {
          scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }, [Message]);
      
    const toggle=()=>{
        if(state){
            setbut(false)
        }else{
            setbut(true)
        }
    }
    const dispatch = useDispatch();
    const messagesFromRedux = useSelector(state => state.message.messages)



    useEffect(() => {

        eventQuery('Welcome')

    }, [])


    const textQuery = async (text) => {

        //  First  Need to  take care of the message I sent     
        let conversation = {
            who: 'user',
            content: {
                text: {
                    text: text
                }
            }
        }

        dispatch(saveMessage(conversation))
        // console.log('text I sent', conversation)

        // We need to take care of the message Chatbot sent 
        const textQueryVariables = {
            text
        }
        try {
            //I will send request to the textQuery ROUTE 
            const response = await Axios.post('/api/dialogflow/dialogflow', textQueryVariables)

            for (let content of response.data.fulfillmentMessages) {

                conversation = {
                    who: 'bot',
                    content: content
                }

                dispatch(saveMessage(conversation))
            }


        } catch (error) {
            conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: " Error just occured, please check the problem"
                    }
                }
            }

            dispatch(saveMessage(conversation))


        }

    }


    const eventQuery = async (event) => {
        // We need to take care of the message Chatbot sent 
        const eventQueryVariables = {
            event
        }
        try {
            //I will send request to the textQuery ROUTE 
            const response = await Axios.post('/api/dialogflow/eventQuery', eventQueryVariables)

            for (let content of response.data.fulfillmentMessages) {

                let conversation = {
                    who: 'bot',
                    content: content
                  
                }

                dispatch(saveMessage(conversation))
            }


        } catch (error) {
            let conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: " Error just occured, please check the problem"
                    }
                }
            }
            dispatch(saveMessage(conversation))
        }

    }


    const keyPressHanlder = (e) => {
        if (e.key === "Enter") {

            if (!e.target.value) {
                return alert('you need to type somthing first')
            }

            //we will send request to text query route 
            textQuery(e.target.value)


            e.target.value = "";
        }
    }

    const renderCards = (cards) => {
        return cards.map((card,i) => <Card key={i} cardInfo={card.structValue} />)
    }


    const renderOneMessage = (message, i) => {
        console.log('message', message)

        // we need to give some condition here to separate message kinds 

        // template for normal text 
        if (message.content && message.content.text && message.content.text.text) {
            return <Message key={i} who={message.who} text={message.content.text.text} />
        } else if (message.content && message.content.payload.fields.card) {

            const AvatarSrc = message.who === 'bot' ? <Icon type="robot" /> : <Icon type="smile" />

            return <div>
                <List.Item style={{ padding: '1rem' }}>
                    <List.Item.Meta
                        avatar={<Avatar icon={AvatarSrc} />}
                        title={message.who}
                        description={renderCards(message.content.payload.fields.card.listValue.values)}
                    />
                </List.Item>
            </div>
        }






        // template for card message 




    }

    const renderMessage = (returnedMessages) => {

        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
               return  renderOneMessage(message, i);
            })
        } else {
            return null;
        }
    }


    return (

        <div className=''>
              {state?
        <Fragment>
      
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          {/* <Title level={2} >CHAT BOT APP&nbsp;<Icon type="robot" /></Title> */}
        </div>
        <div className='fixedallchatbot'>
     

    
               <div className='chatbotintel-main'>ArtWeb ChatBot</div>
               <ScrollToBottom className='caintainerChatbot'>


                {renderMessage(messagesFromRedux)}


            </ScrollToBottom>
            <input className='inputchatbot'
                style={{
                     width: '100%', height: 50,
                    borderRadius: '4px', padding: '5px', fontSize: '1rem'
                }}
                placeholder="Send a message..."
                onKeyPress={keyPressHanlder}
                type="text"
            />

        </div>
        </Fragment> :null} 
        <div  onClick={(e) => toggle()}className='imagechatbot'>
            <img src="https://i.imgur.com/bnkA2ai.png" />
        </div>
    </div>
    )
}

export default Chatbot;
