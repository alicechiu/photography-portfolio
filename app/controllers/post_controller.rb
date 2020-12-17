class PostController < ApplicationController

  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to post_index_path,
               notice: "Successfully uploaded #{@post.title}"
    else
      render :new
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :description, :image)
  end
end