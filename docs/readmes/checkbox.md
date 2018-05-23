## Usage

```jsx
import { Checkbox } from 'materialish';
import 'materialish/checkbox.css';
```

## Props

| Prop Name | Default Value | Required | Description                                              |
| --------- | ------------- | -------- | -------------------------------------------------------- |
| className |               | No       | Additional class name(s) to add to the Checkbox          |
| style     |               | No       | Inline styles to add to the root element of the Checkbox |
| ...rest   |               | No       | Other props are placed on the underlying `input` element |

## CSS Variables

| Variable                      | Default Value | Description                                         |
| ----------------------------- | ------------- | --------------------------------------------------- |
| --mt-baseFontSize             | 1rem          | The size of the checkbox is based off of this value |
| --mt-checkbox-backgroundColor | #2196f3       | The background color of the checkbox                |
| --mt-checkbox-tickColor       | #ffffff       | The color of the checkbox's tick                    |
| --mt-checkbox-focusColor      | #e8e8e8       | The color of the focused circle layer               |