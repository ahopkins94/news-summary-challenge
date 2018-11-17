describe("ArticleSummaryView", function() {
  var article = new Article(0, "this is an article", "www.google.com", "this is a summary")
  var articleSummaryView = new ArticleSummaryView(article)
  describe(".initialize", function() {
  it("should take an article as a parameter and assign that to a constructor property" {
    expect(articleSummaryView.article).toBe(article)
  })
  })
})