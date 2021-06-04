import React, { useEffect, useState } from "react";
import { Linking } from 'react-native'
import { TouchableOpacity, StyleSheet, View, Touchable, TouchableWithoutFeedback } from 'react-native';
import { Container, Footer, FooterTab, Text, Content, Button } from 'native-base';
import { SliderBox } from "react-native-image-slider-box";
import ImageView from 'react-native-image-view'
import { blue, gray, gray2, gray3, white } from '../assets/colors';
import Icon from "react-native-vector-icons/Ionicons";

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';

import AppConfig from '../config/AppConfig';

const opencage = require('opencage-api-client');

function Details(params) {
    const [isVisible, setIsVisible] = useState(false);
    const [imageindex, setImageIndex] = useState(0);
    const location = 'Krumovgrad, Bulgaria';
    const [coordinates, setCoordinates] = useState({
        lat: 41.4712992,
        lng: 25.6459465
    });

    console.log(params.data);

    function call() {
        console.log(location, AppConfig.OpenCageKey);
        opencage.geocode({ q: `${location}`, key: `${AppConfig.OpenCageKey}`, no_annotations: 1 })
            .then(data => {
                console.log('============================================================================')
                let res = data.results[0].bounds.northeast;
                console.log(res);
                setCoordinates(res);
            })
            .catch(err => {
                console.log(JSON.stringify(err.message));
            })
    }

    const setVisible = () => {
        setIsVisible(!isVisible)
    }

    const images = ["https://a.allegroimg.com/s1024/0c49bc/0fc5bbcf4d27bb92603536ec85bf",
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree"];


    const images2 = [
        {
            source: {
                uri: 'https://a.allegroimg.com/s1024/0c49bc/0fc5bbcf4d27bb92603536ec85bf',
            },
        },
        {
            source: {
                uri: 'https://source.unsplash.com/1024x768/?nature'
            }
        }
    ];

    return (
        <Container style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
            <Content>
                <View>
                    <TouchableWithoutFeedback onPress={() => setVisible()}>
                        <SliderBox images={images} dotColor={blue}
                            imageLoadingColor={blue} currentImageEmitter={(index) => setImageIndex(index)} />
                    </TouchableWithoutFeedback>
                </View>

                <ImageView
                    images={images2}
                    imageIndex={imageindex}
                    isVisible={isVisible}
                    onClose={() => setIsVisible()}
                    next={true}
                    prev={true}
                    renderFooter={(currentImage) => (<View><Text>My footer</Text></View>)}
                />

                <View style={styles.mainContainer}>
                    <Text style={styles.title}>BMW e92
                        <Text style={styles.subTitle}> 335d 300+</Text>
                    </Text>

                    <Text style={styles.link}>{'>'}Technical characteristics and fuel consumption{'<'}</Text>

                    <Text style={styles.price}>18 000лв.</Text>

                    <View style={{ flexDirection: 'row', margin: 5, justifyContent: 'space-between' }}>

                        <Button onPress={() => Linking.openURL('tel:088 6969 696')} style={styles.button}>
                            <Icon name="call" style={styles.icon} />
                            <Text style={styles.buttonText}>Call</Text>
                        </Button>

                        <Button onPress={() => call()} style={styles.button}>
                            <Icon name="star" style={styles.icon} />
                            <Text style={styles.buttonText}>Save</Text>
                        </Button>
                    </View>

                </View>

                <View style={styles.mainContainer}>
                    <Text>Дата на производство: 2007</Text>
                    <Text>Тип двигател: Дизел</Text>
                    <Text>Мощност: 300+</Text>
                    <Text>Евростандарт:Евро 5</Text>
                    <Text>Скоростна кутия: Автоматична</Text>
                    <Text>Пробег: 230 000</Text>
                    <Text>Цвят: Черен</Text>
                </View>

                <View style={styles.mainContainer}>
                    <Text style={{ fontWeight: 'bold' }}>ДОПЪЛНИТЕЛНА ИНФОРМАЦИЯ</Text>
                    <Text>ЛИЗИНГ без първоначална вноска с 6% оскъпяване!
На реални 135000км. Фирма ВМ ТРЕЙД е с над 15 годишен опит във вноса и търговията с леки и лекотоварни автомобили. Работим с много от най-големите представителства в Италия и внимателно подбираме автомобилите които ви предлагаме. Всеки един от тях минава техническа проверка, за да можем да ви гарантираме качество и да оправдаем вашето доверие. Можем да ви консултираме професионално при избора на автомобил. За вашето удобство можем да ви предложим пълно съдействие при регистрация в КАТ и транзитни номера. Можем да ви предложим отстъпка при застраховки Гражданска отговорност и Автокаско на водещите компании. Безплатно ще превозим закупения от нас автомобил до място посочено от вас в рамките на София и срещу конкурентни цени до всяка точка на България и Европа. Можем да ви предложим лизинг през нашити партньори от MOGO. BG с незабавно одобрение като въведете нашия промо код СА198 ( на кирилица) или избрана от вас лизингова компания. Всички автомобили се продават на фактура, без никакви допълнителни разходи по прехвърляне. Работим всеки ден от 9: 00 до 18</Text>
                </View>

                <View style={styles.mainContainer}>
                    <Text style={{ fontWeight: 'bold' }}>Екстри</Text>

                    <Text>
                        <Icon name='checkmark' style={{ color: blue, fontSize: 20 }} />
                        Бордкомпютър
                    </Text>
                    <Text>
                        <Icon name='checkmark' style={{ color: blue, fontSize: 20 }} />
                        Ел. Огледала
                    </Text>
                    <Text>
                        <Icon name='checkmark' style={{ color: blue, fontSize: 20 }} />
                        Ел. Стъкла
                    </Text>
                    <Text>
                        <Icon name='checkmark' style={{ color: blue, fontSize: 20 }} />
                        Климатик
                    </Text>
                    <Text>
                        <Icon name='checkmark' style={{ color: blue, fontSize: 20 }} />
                        Регулиране на волана
                    </Text>
                    <Text>
                        <Icon name='checkmark' style={{ color: blue, fontSize: 20 }} />
                        Серво усилвател на волана
                    </Text>
                    <Text>
                        <Icon name='checkmark' style={{ color: blue, fontSize: 20 }} />
                        Стерео уредба
                    </Text>
                </View>

                <View style={styles.mainContainer}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        // style={styles.map}
                        style={{ width: '100%', height: 300 }}
                        region={{
                            latitude: coordinates.lat,
                            longitude: coordinates.lng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                    >
                        <Marker
                            coordinate={{ latitude: coordinates.lat, longitude: coordinates.lng }}
                        />
                    </MapView>
                </View>
            </Content>

        </Container>
    );

}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: white, padding: 10, margin: 10, borderRadius: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    subTitle: {
        fontWeight: 'normal',
        color: gray3,
        fontSize: 18
    },
    link: {
        textDecorationLine: 'underline',
        fontSize: 15
    },
    price: {
        fontWeight: 'bold',
        color: blue,
        fontSize: 20
    },
    button: {
        flexDirection: 'row',
        width: '45%',
        height: 45,
        margin: 10,
        backgroundColor: blue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: white
    },
    icon: {
        color: white,
        fontSize: 20
    }
});

export default Details;