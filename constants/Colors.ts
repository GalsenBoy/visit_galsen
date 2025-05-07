/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  custumColors: {
    vertDoux: '#4CAF50', // boutons positifs, éléments actifs   
    jauneSable: '#FDD835', // highlights, icônes, fond de section 
    rougeTerre: '#E53935',  //actions importantes, alertes        
    crèmeClair: '#FAF3E0', //fond général, cartes                
    vertClair: '#A5D6A7',//hover ou éléments secondaires       
    rougeRosé: '#FFCDD2',//fonds doux avec le rouge            
    grisClair: '#6b7280', // fonds de carte, arrière-plan doux
  }
};
