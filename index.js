import { NativeModules, Platform } from 'react-native';

const { WifiManager } = NativeModules;

export default Platform.OS === 'ios' ?
    {
        ...WifiManager,
        loadWifiList: function (resolve, reject) {
            WifiManager.getWifiList((err, list) => {
                if (err) {
                    return reject(err);
                }
                resolve(JSON.stringify(list));
            });
        }
    } : WifiManager;
