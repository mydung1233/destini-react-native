import Story from './Story';

// Tương đương class StoryBrain trong Dart (story_brain.dart)
export default class StoryBrain {
  constructor() {
    this._storyNumber = 0;

    // Danh sách đoạn truyện. Chỉ số trong nextStory1/nextStory2 chính là
    // vị trí của đoạn truyện kế tiếp trong mảng này.
    this._storyData = [
      // 0
      new Story(
        'Chiếc xe của bạn chết máy giữa đèo vắng lúc nửa đêm, điện thoại không còn sóng. ' +
          'Từ xa, một ánh đèn pin lắc lư tiến lại gần và người lạ vẫy tay ra hiệu cho bạn.',
        'Bước xuống xe và chào người lạ',
        'Khóa cửa, ngồi chờ đến sáng',
        2,
        1
      ),
      // 1
      new Story(
        'Bạn khóa cửa, ngồi co ro trong xe. Chợt có tiếng gõ nhẹ lên cửa kính, ' +
          'ngoài kia chỉ có bóng tối và một vệt sáng đèn pin mờ.',
        'Hé cửa sổ nhìn ra ngoài',
        'Bấm còi xe thật to',
        2,
        4
      ),
      // 2
      new Story(
        'Người lạ là một thợ sửa xe địa phương. Ông cho biết gara gần nhất cách đây hai cây số, ' +
          'đi đường tắt qua rừng sẽ nhanh hơn nhiều so với đi theo đường nhựa.',
        'Đi đường tắt qua rừng',
        'Đi theo đường nhựa dù xa hơn',
        5,
        3
      ),
      // 3 (kết thúc)
      new Story(
        'Bạn chọn đường nhựa. Trời hửng sáng thì cả hai đến gara, xe được sửa xong ' +
          'và bạn kịp ăn sáng. Người cẩn thận luôn đến nơi an toàn.',
        'Bắt đầu lại'
      ),
      // 4 (kết thúc)
      new Story(
        'Tiếng còi vang vọng làm cả đàn dơi bay ra khỏi hang. Đội kiểm lâm đang tuần tra ' +
          'nghe thấy và đến phạt bạn vì gây ồn trong khu bảo tồn.',
        'Bắt đầu lại'
      ),
      // 5 (kết thúc)
      new Story(
        'Đường tắt dẫn bạn đến một thác nước tuyệt đẹp mà ít người biết. ' +
          'Bạn mất cả buổi sáng để ngắm cảnh, và chuyến đi hỏng xe hóa ra là kỷ niệm đáng nhớ nhất.',
        'Bắt đầu lại'
      ),
    ];
  }

  getStory() {
    return this._storyData[this._storyNumber].storyTitle;
  }

  getChoice1() {
    return this._storyData[this._storyNumber].choice1;
  }

  getChoice2() {
    return this._storyData[this._storyNumber].choice2;
  }

  // Chuyển sang đoạn kế tiếp; nếu đã ở đoạn kết thì bắt đầu lại
  nextStory(choiceNumber) {
    const current = this._storyData[this._storyNumber];
    const next = choiceNumber === 1 ? current.nextStory1 : current.nextStory2;

    if (next === null || next === undefined) {
      this.restart();
    } else {
      this._storyNumber = next;
    }
  }

  restart() {
    this._storyNumber = 0;
  }

  // Nút 2 chỉ hiện khi đoạn truyện hiện tại còn lựa chọn thứ hai
  buttonShouldBeVisible() {
    return this._storyData[this._storyNumber].choice2 !== null;
  }
}
