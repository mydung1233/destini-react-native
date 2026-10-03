// Tương đương class Story trong Dart (story.dart)
export default class Story {
  constructor(storyTitle, choice1, choice2 = null, nextStory1 = null, nextStory2 = null) {
    this.storyTitle = storyTitle; // nội dung đoạn truyện
    this.choice1 = choice1; // chữ trên nút lựa chọn 1
    this.choice2 = choice2; // chữ trên nút lựa chọn 2 (null nếu là đoạn kết)
    this.nextStory1 = nextStory1; // chỉ số đoạn truyện kế tiếp nếu chọn 1
    this.nextStory2 = nextStory2; // chỉ số đoạn truyện kế tiếp nếu chọn 2
  }
}
