class MessagesController < ApplicationController

  def index
    @messages = Message.all
  end

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.valid?
      @message.save
      flash[:notice] = "Message sent successfully!"
      redirect_to '/'
    else
      render :new
    end
  end

  private

  def message_params
    params.require(:message).permit(:first_name, :last_name, :email, :message)
  end
end