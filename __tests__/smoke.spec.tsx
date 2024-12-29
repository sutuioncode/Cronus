import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';


it('Should be visible', ()=>{
    render(<Text>Welcome to React Native</Text>);
    const label = screen.getByText('Welcome to React Native');

    expect(label).toBeVisible()
})