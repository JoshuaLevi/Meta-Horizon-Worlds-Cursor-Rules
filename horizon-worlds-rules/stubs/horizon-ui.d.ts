// Minimal stubs for UI
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace hzUI {
  type Children = any[];
  interface LayoutStyle {
    flexDirection?: 'row'|'column';
    padding?: number;
    margin?: number;
    width?: number; height?: number;
    alignItems?: 'flex-start'|'center'|'flex-end';
    justifyContent?: 'flex-start'|'center'|'flex-end'|'space-between';
  }
  interface TextStyle { color?: string; fontSize?: number }
  interface ImageStyle { width?: number; height?: number }
  interface ViewProps { style?: LayoutStyle; children?: Children }
  interface TextProps { style?: TextStyle; children?: any }
  interface ImageProps { style?: ImageStyle; source?: any }
  interface PressableProps { onPress?: () => void; children?: Children }
  function View(props: ViewProps): any;
  function Text(props: TextProps): any;
  function Image(props: ImageProps): any;
  function Pressable(props: PressableProps): any;
}
export {};
