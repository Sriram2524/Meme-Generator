import {Component} from 'react'
import {
  Divcontainer,
  Divinputcontainer,
  Heading,
  Label,
  Input,
  Select,
  Button,
  NatureContainer,
  ToptextContainer,
  BottomtextContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imgeUrl: '',
    topText: '',
    bottomText: '',
    initialValue: fontSizesOptionsList[0].optionId,
    showImg: '',
    showTop: '',
    showBottom: '',
    activeId: '',
  }

  onChangeFont = event => {
    this.setState({initialValue: event.target.value})
  }

  onChangeImgUrl = event => {
    this.setState({imgeUrl: event.target.value})
  }

  onChangeTop = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottom = event => {
    this.setState({bottomText: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imgeUrl, topText, bottomText, initialValue} = this.state
    this.setState({
      showImg: imgeUrl,
      showTop: topText,
      showBottom: bottomText,
      activeId: initialValue,
    })
  }

  render() {
    const {imgeUrl, topText, bottomText, initialValue} = this.state
    const {showBottom, showImg, showTop, activeId} = this.state
    return (
      <Divcontainer>
        <Divinputcontainer>
          <Heading>Meme Generator</Heading>
          <form onSubmit={this.onSubmitForm}>
            <Label htmlFor="imgUrl">Image URL</Label>
            <Input
              onChange={this.onChangeImgUrl}
              id="imgUrl"
              value={imgeUrl}
              placeholder="Enter the Image URL"
              type="text"
            />
            <Label htmlFor="top">Top Text</Label>
            <Input
              onChange={this.onChangeTop}
              id="top"
              value={topText}
              placeholder="Enter the Top Text"
              type="text"
            />
            <Label htmlFor="bottom">Bottom Text</Label>
            <Input
              onChange={this.onChangeBottom}
              id="bottom"
              value={bottomText}
              placeholder="Enter the Bottom Text"
              type="text"
            />
            <Label htmlFor="fontSize">Font Size</Label>
            <Select
              id="fontSize"
              value={initialValue}
              onChange={this.onChangeFont}
            >
              {fontSizesOptionsList.map(each => (
                <option value={each.optionId} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </Select>
            <Button type="submit">Generate</Button>
          </form>
        </Divinputcontainer>
        <NatureContainer data-testid="meme" showImg={showImg}>
          <ToptextContainer activeId={activeId}>{showTop}</ToptextContainer>
          <BottomtextContainer activeId={activeId}>
            {showBottom}
          </BottomtextContainer>
        </NatureContainer>
      </Divcontainer>
    )
  }
}
export default MemeGenerator
