/**
 * Created by bogdanbegovic on 8/26/16.
 */

import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({

    //CALENDAR STYLES
    calendarContainer: {
        overflow: 'hidden'
    },
    datesStrip: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    calendarDates: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calendarHeader: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    iconContainerLeft: {
        position: 'absolute',
        left: 0,
        top: 10,
        zIndex: 5
    },
    iconContainerRight: {
        position: 'absolute',
        right: 0,
        top: 10,
        zIndex: 5
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    //CALENDAR DAY
    dateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        width: 40,
        height: 40,
        borderRadius: 40 / 2
    },
    dateName: {
        fontSize: 10,
        textAlign: 'center'
    },
    weekendDateName: {
        fontSize: 10,
        color: '#A7A7A7',
        textAlign: 'center'
    },
    dateNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    weekendDateNumber: {
        fontSize: 18,
        color: '#A7A7A7',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
