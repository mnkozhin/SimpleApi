class DaysController < ApplicationController
#GET days/:date=true|false, time=true|false, timeOfday=true|false
#date: "2021-10-15",
#time: "12:07",
#timeOfDay: "День"
  def api
	t = Time.now
	
        if params[:date]=="true"
	 dateDays= Time.now.strftime("%Y-%m-%d")

	else
	dateDays=""
	end
	if params[:time]=="true"
	 timeDays= Time.now.strftime("%H:%M")

	else
	timeDays=""
	end	
	if params[:timeOfday]=="true"
		case t.hour
		when 0..7
		  timeofDays="Ночь"
		when 8..11 
		  timeofDays="Утро"
		when 12..18
		  timeofDays="День"
		when 19..24
		  timeofDays="Вечер"
		else
		  timeofDays="Счастливые часов не наблюдают"
		end

	else	
		timeofDays=""
	end
	
	msg = {:date => dateDays, :time => timeDays, :timeofDay=> timeofDays}
	render :json => msg

  end
end
