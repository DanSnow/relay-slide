import screen from './screen';
import print from './print';

export const styles = function styles(colors, fonts) {
  return {
    screen: screen(colors, fonts),
    print: print()
  };
};

export default styles;
